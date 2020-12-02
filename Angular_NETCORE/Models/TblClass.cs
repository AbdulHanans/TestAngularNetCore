using System;
using System.Collections.Generic;

#nullable disable

namespace Angular_NETCORE.Models
{
    public partial class TblClass
    {
        public TblClass()
        {
            TblStudentClassAdmitedNavigations = new HashSet<TblStudent>();
            TblStudentClassLeftSchoolNavigations = new HashSet<TblStudent>();
            TblStudentCurrentClassNavigations = new HashSet<TblStudent>();
        }

        public int ClassId { get; set; }
        public string ClassName { get; set; }
        public int? Priority { get; set; }

        public virtual ICollection<TblStudent> TblStudentClassAdmitedNavigations { get; set; }
        public virtual ICollection<TblStudent> TblStudentClassLeftSchoolNavigations { get; set; }
        public virtual ICollection<TblStudent> TblStudentCurrentClassNavigations { get; set; }
    }
}
