using System;
using System.Collections.Generic;

#nullable disable

namespace Angular_NETCORE.Models
{
    public partial class TblStudentMonthlyFee
    {
        public int StudentMonthlyFeeId { get; set; }
        public int? StudentId { get; set; }
        public int? SessionId { get; set; }
        public int? MonthlyFee { get; set; }
        public string Reason { get; set; }
        public bool? IsEnabled { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
