import openpyxl
wb = openpyxl.load_workbook('/sessions/magical-fervent-darwin/mnt/uploads/Digital Campaign Report- 18-June26-05c3a545.xlsx', data_only=True)
print("Sheets:", wb.sheetnames)
