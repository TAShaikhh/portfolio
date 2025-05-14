#!/bin/sh
bun run build
cd out
zip -rFS ../../out.zip .

