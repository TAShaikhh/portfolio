import pandas as pd
import PyPDF2
import tkinter as tk
from tkinter import filedialog, messagebox
from tkinter import ttk
import re
from fuzzywuzzy import fuzz

class PDFDataExtractor:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("PDF Data Extractor")
        self.root.geometry("1000x800")
        
        # Column Headers Input
        self.header_frame = ttk.LabelFrame(self.root, text="Column Headers")
        self.header_frame.pack(fill="x", padx=10, pady=5)
        
        self.headers_text = tk.Text(self.header_frame, height=3)
        self.headers_text.pack(fill="x", padx=5, pady=5)
        ttk.Label(self.header_frame, text="Enter expected column headers separated by commas").pack()
        
        # Data Input
        self.data_frame = ttk.LabelFrame(self.root, text="Raw Data")
        self.data_frame.pack(fill="both", expand=True, padx=10, pady=5)
        
        self.data_text = tk.Text(self.data_frame)
        self.data_text.pack(fill="both", expand=True, padx=5, pady=5)
        
        # Configuration Frame
        self.config_frame = ttk.LabelFrame(self.root, text="Data Processing Configuration")
        self.config_frame.pack(fill="x", padx=10, pady=5)
        
        # Similarity threshold
        ttk.Label(self.config_frame, text="Matching Threshold (0-100):").pack(side="left", padx=5)
        self.similarity_threshold = ttk.Entry(self.config_frame, width=5)
        self.similarity_threshold.insert(0, "80")
        self.similarity_threshold.pack(side="left", padx=5)
        
        # Fill missing values
        self.fill_missing_var = tk.BooleanVar(value=True)
        ttk.Checkbutton(self.config_frame, text="Fill missing values", variable=self.fill_missing_var).pack(side="left", padx=20)
        
        # Buttons
        self.button_frame = ttk.Frame(self.root)
        self.button_frame.pack(fill="x", padx=10, pady=5)
        
        ttk.Button(self.button_frame, text="Load PDF", command=self.load_pdf).pack(side="left", padx=5)
        ttk.Button(self.button_frame, text="Process Data", command=self.process_data).pack(side="left", padx=5)
        ttk.Button(self.button_frame, text="Export to Excel", command=self.export_to_excel).pack(side="left", padx=5)
        
        # Preview Frame
        self.preview_frame = ttk.LabelFrame(self.root, text="Data Preview")
        self.preview_frame.pack(fill="both", expand=True, padx=10, pady=5)
        
        self.preview_text = tk.Text(self.preview_frame, height=10)
        self.preview_text.pack(fill="both", expand=True, padx=5, pady=5)
        
        self.df = None
        
    def load_pdf(self):
        file_paths = filedialog.askopenfilenames(filetypes=[("PDF files", "*.pdf")])
        if file_paths:
            try:
                text = ""
                for file_path in file_paths:
                    pdf_reader = PyPDF2.PdfReader(file_path)
                    for page in pdf_reader.pages:
                        text += page.extract_text() + "\n\n"
                self.data_text.delete(1.0, tk.END)
                self.data_text.insert(tk.END, text)
            except Exception as e:
                messagebox.showerror("Error", f"Failed to load PDF: {str(e)}")

    def find_best_match(self, value, headers):
        best_match = None
        best_score = 0
        for header in headers:
            score = fuzz.ratio(value.lower(), header.lower())
            if score > best_score:
                best_score = score
                best_match = header
        return best_match if best_score >= int(self.similarity_threshold.get()) else None

    def extract_structured_data(self, text, expected_headers):
        lines = text.split('\n')
        data_dict = {header: [] for header in expected_headers}
        current_line_data = {}
        
        for line in lines:
            if not line.strip():
                # Process the collected data when encountering empty line
                if current_line_data:
                    for header in expected_headers:
                        data_dict[header].append(current_line_data.get(header, None))
                    current_line_data = {}
                continue
                
            # Try to identify header-value pairs
            for header in expected_headers:
                # Look for patterns like "Header: Value" or "Header Value"
                patterns = [
                    f"{header}:?\s*(.*)",
                    f".*{header}:?\s*(.*)",
                ]
                
                for pattern in patterns:
                    match = re.search(pattern, line, re.IGNORECASE)
                    if match:
                        value = match.group(1).strip()
                        if value:
                            current_line_data[header] = value
                            break
        
        # Process any remaining data
        if current_line_data:
            for header in expected_headers:
                data_dict[header].append(current_line_data.get(header, None))
        
        return pd.DataFrame(data_dict)

    def process_data(self):
        try:
            expected_headers = [h.strip() for h in self.headers_text.get(1.0, tk.END).strip().split(',')]
            raw_text = self.data_text.get(1.0, tk.END).strip()
            
            # Extract structured data
            self.df = self.extract_structured_data(raw_text, expected_headers)
            
            # Fill missing values if enabled
            if self.fill_missing_var.get():
                self.df = self.df.fillna(method='ffill')  # Forward fill
                self.df = self.df.fillna(method='bfill')  # Backward fill
                self.df = self.df.fillna('N/A')  # Fill remaining with N/A
            
            # Update preview
            self.preview_text.delete(1.0, tk.END)
            self.preview_text.insert(tk.END, str(self.df.head()))
            
            messagebox.showinfo("Success", 
                f"Data processed successfully!\nRows: {len(self.df)}\nColumns: {len(self.df.columns)}")
            
        except Exception as e:
            messagebox.showerror("Error", f"Failed to process data: {str(e)}")
    
    def export_to_excel(self):
        if self.df is not None:
            file_path = filedialog.asksaveasfilename(
                defaultextension=".xlsx",
                filetypes=[("Excel files", "*.xlsx")]
            )
            if file_path:
                try:
                    # Create Excel writer with xlsxwriter engine
                    with pd.ExcelWriter(file_path, engine='xlsxwriter') as writer:
                        self.df.to_excel(writer, index=False, sheet_name='Extracted Data')
                        
                        # Get workbook and worksheet objects
                        workbook = writer.book
                        worksheet = writer.sheets['Extracted Data']
                        
                        # Add formats
                        header_format = workbook.add_format({
                            'bold': True,
                            'bg_color': '#D3D3D3',
                            'border': 1
                        })
                        
                        # Format headers
                        for col_num, value in enumerate(self.df.columns.values):
                            worksheet.write(0, col_num, value, header_format)
                            worksheet.set_column(col_num, col_num, max(15, len(value) + 2))
                            
                    messagebox.showinfo("Success", "Data exported successfully!")
                except Exception as e:
                    messagebox.showerror("Error", f"Failed to export: {str(e)}")
        else:
            messagebox.showwarning("Warning", "Please process data first!")
    
    def run(self):
        self.root.mainloop()

if __name__ == "__main__":
    app = PDFDataExtractor()
    app.run()

