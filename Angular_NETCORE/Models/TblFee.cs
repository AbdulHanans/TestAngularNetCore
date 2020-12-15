using System;
using System.Collections.Generic;

#nullable disable

namespace Angular_NETCORE.Models
{
    public partial class TblFee
    {
        public int FeeId { get; set; }
        public string FeeYear { get; set; }
        public string FeeMonth { get; set; }
        public DateTime? Date { get; set; }
        public int? PaidFee { get; set; }
        public int? StudentId { get; set; }
        public int? Balance { get; set; }
        public int? SessionId { get; set; }
        public int? CollectedBy { get; set; }
        public string Deleted { get; set; }
        public int? DeletedBy { get; set; }
        public decimal? MonthlyBalance { get; set; }
        public int? MonthlyFee { get; set; }
    }
}
