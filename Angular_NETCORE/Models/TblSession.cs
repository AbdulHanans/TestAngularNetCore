using System;
using System.Collections.Generic;

#nullable disable

namespace Angular_NETCORE.Models
{
    public partial class TblSession
    {
        public TblSession()
        {
            TblFees = new HashSet<TblFee>();
            TblMiscFees = new HashSet<TblMiscFee>();
        }

        public int SessionId { get; set; }
        public string SessionName { get; set; }
        public bool? IsEnable { get; set; }
        public bool? IsActive { get; set; }

        public virtual ICollection<TblFee> TblFees { get; set; }
        public virtual ICollection<TblMiscFee> TblMiscFees { get; set; }
    }
}
