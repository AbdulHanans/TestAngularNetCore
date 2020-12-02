using System;
using System.Collections.Generic;

#nullable disable

namespace Angular_NETCORE.Models
{
    public partial class TblStudent
    {
        public TblStudent()
        {
            TblFees = new HashSet<TblFee>();
            TblMiscFees = new HashSet<TblMiscFee>();
        }

        public int StudentId { get; set; }
        public string AdmissionNo { get; set; }
        public string StudentName { get; set; }
        public string FatherName { get; set; }
        public string FatherCnic { get; set; }
        public string DateOfBirth { get; set; }
        public string MobileNumber { get; set; }
        public string LandLineNumber { get; set; }
        public int? ClassAdmited { get; set; }
        public int? CurrentClass { get; set; }
        public decimal? MonthlyFee { get; set; }
        public string Address { get; set; }
        public decimal? MiscellaneousFee { get; set; }
        public int? ClassLeftSchool { get; set; }
        public string Slcissued { get; set; }
        public string DateOfSlc { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public int? DeletedBy { get; set; }
        public bool? MonthlyFeeUpdated { get; set; }
        public int? SessionLeftSchool { get; set; }
        public int? LeftBy { get; set; }
        public int? UpdatedBy { get; set; }
        public decimal? AdmissionFee { get; set; }

        public virtual TblClass ClassAdmitedNavigation { get; set; }
        public virtual TblClass ClassLeftSchoolNavigation { get; set; }
        public virtual TblClass CurrentClassNavigation { get; set; }
        public virtual ICollection<TblFee> TblFees { get; set; }
        public virtual ICollection<TblMiscFee> TblMiscFees { get; set; }
    }
}
