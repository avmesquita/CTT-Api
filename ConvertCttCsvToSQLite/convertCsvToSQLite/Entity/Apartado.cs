
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace convertCsvToSQLite.Entity
{
	/// <summary>
	/// CREATE TABLE `Apartado` 
	/// (
	///     `Id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	///     `PostalOfficeIdentification` varchar,
	/// 	`FirstPOBox` varchar,
	/// 	`LastPOBox` varchar,
	/// 	`PostalCode` varchar,
	/// 	`PostalCodeExtension` varchar,
	/// 	`PostalName` varchar,
	/// 	`PostalCodeSpecial` varchar,
	/// 	`PostalCodeSpecialExtension` varchar,
	/// 	`PostalNameSpecial` varchar
	///  )
	/// </summary>
	[Table("Apartado")]
	public class Apartado
	{		
		/// 1) Name: EP
		/// Description: Identification of the Postal Office where the PO Boxes are installed.
		/// Data Type: Alphanumeric, always filled
		public string PostalOfficeIdentification { get; set; }

		/// 2) Name: APA_INI
		/// Description: First PO Box of the Block / PO Box with special postcode
		/// Data Type: Numerical, always filled 
		public string FirstPOBox { get; set; }

		/// 3) Name: APA_FIM
		/// Description: Last PO Box of the Block
		/// Data Type: Numerical, If filled it implies that the record corresponds to the
		/// block of PO Boxes[APA_INI, APA_FIM] with postcode in fields CP4_AP, CP3_AP and CPALF_AP.
		/// If Empty it implies that the register represents the PO Box APA_INI with the special
		/// postcode CP4_APC, CP3_APC and CPALF_APC.
		public string LastPOBox { get; set; }

		/// 4) Name: CP4_AP
		/// Description: Postcode first 4 digits of the PO Boxes block
		/// Data Type: Alphanumeric, always filled for Block of PO Boxes 
		public string PostalCode { get; set; }

		/// 5) Name: CP3_AP
		/// Description: Postcode 3-digit extension of the PO Boxes block
		/// Data Type: Alphanumeric, always filled for Block of PO Boxes 
		public string PostalCodeExtension { get; set; }

		/// 6) Name: CPALF_AP
		/// Description: Postal Name of the PO Boxes block
		/// Data Type: Alphanumeric, always filled for Block of PO Boxes 
		public string PostalName { get; set; }

		/// 7) Name: CP4_APC
		/// Description: Postcode first 4 digits of the PO Box with special postcode
		/// Data Type: Alphanumeric, always filled for PO Box with special postcode 
		public string PostalCodeSpecial { get; set; }

		/// 8) Name: CP3_APC
		/// Description: Postcode 3-digit extension of the PO Box with special postcode
		/// Data Type: Alphanumeric, always filled for PO Box with special postcode  
		public string PostalCodeSpecialExtension { get; set; }

		/// 9) Name: CPALF_APC
		/// Description: Postal Name of the PO Box with special postcode
		/// Data Type: Alphanumeric, always filled for PO Box with special postcode
		public string PostalNameSpecial { get; set; }
	}
}
