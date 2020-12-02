using System;
using System.Collections.Generic;

#nullable disable

namespace Angular_NETCORE.Models
{
    public partial class TblSessionSetting
    {
        public int SessionSettingId { get; set; }
        public int SessionId { get; set; }
        public int StudentId { get; set; }
        public int? MonthlyFee { get; set; }
        public int? UpdatedMonthlyFee { get; set; }
        public int? MiscellaneousFee { get; set; }
        public int? UpdatedMiscellaneousFee { get; set; }
        public int? Class { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public int? UpdatedBy { get; set; }
    }
}
