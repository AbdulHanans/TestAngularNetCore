using System;
using System.Collections.Generic;

#nullable disable

namespace Angular_NETCORE.Models
{
    public partial class TblMiscFee
    {
        public int MiscFeeId { get; set; }
        public DateTime? Date { get; set; }
        public int? PaidMiscFee { get; set; }
        public int StudentId { get; set; }
        public int? SessionId { get; set; }
        public int? CollectedBy { get; set; }
        public string Deleted { get; set; }
        public int? DeletedBy { get; set; }
    }
}
