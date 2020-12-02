﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Angular_NETCORE.Models
{
    public partial class TblUser
    {
        public TblUser()
        {
            TblFeeCollectedByNavigations = new HashSet<TblFee>();
            TblFeeDeletedByNavigations = new HashSet<TblFee>();
            TblMiscFees = new HashSet<TblMiscFee>();
        }

        public int UserId { get; set; }
        public string UserName { get; set; }
        public string FatherName { get; set; }
        public string UserPassword { get; set; }
        public string UserRole { get; set; }
        public string FirstName { get; set; }
        public bool? IsEnable { get; set; }

        public virtual ICollection<TblFee> TblFeeCollectedByNavigations { get; set; }
        public virtual ICollection<TblFee> TblFeeDeletedByNavigations { get; set; }
        public virtual ICollection<TblMiscFee> TblMiscFees { get; set; }
    }
}
