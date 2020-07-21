
--------------------------------------------------------------------- 
	Format of the PO BOXES file todos_aps.txt 
--------------------------------------------------------------------- 

All the records of the file have the same format. Two types of information are placed: 
- Postcode of PO Boxes in a Block
- Special Postcode of a PO Box separated from the others in the Block

Each line has 9 fields of data, separate with ;
The following values can be found: 

1) Name: EP
Description: Identification of the Postal Office where the PO Boxes are installed. 
Data Type: Alphanumeric, always filled

2) Name: APA_INI 
Description: First PO Box of the Block / PO Box with special postcode 
Data Type: Numerical, always filled 

3) Name: APA_FIM 
Description: Last PO Box of the Block 
Data Type: Numerical, If filled it implies that the record corresponds to the 
block of PO Boxes[APA_INI, APA_FIM] with postcode in fields CP4_AP, CP3_AP and CPALF_AP. 
If Empty it implies that the register represents the PO Box APA_INI with the special 
postcode CP4_APC, CP3_APC and CPALF_APC. 

4) Name: CP4_AP 
Description: Postcode first 4 digits of the PO Boxes block
Data Type: Alphanumeric, always filled for Block of PO Boxes 

5) Name: CP3_AP 
Description: Postcode 3-digit extension of the PO Boxes block
Data Type: Alphanumeric, always filled for Block of PO Boxes 

6) Name: CPALF_AP 
Description: Postal Name of the PO Boxes block
Data Type: Alphanumeric, always filled for Block of PO Boxes 

7) Name: CP4_APC 
Description: Postcode first 4 digits of the PO Box with special postcode 
Data Type: Alphanumeric, always filled for PO Box with special postcode 

8) Name: CP3_APC 
Description: Postcode 3-digit extension of the PO Box with special postcode 
Data Type: Alphanumeric, always filled for PO Box with special postcode  

9) Name: CPALF_APC 
Description: Postal Name of the PO Box with special postcode
Data Type: Alphanumeric, always filled for PO Box with special postcode 