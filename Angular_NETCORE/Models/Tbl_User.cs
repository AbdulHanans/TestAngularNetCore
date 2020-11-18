using System;
using System.ComponentModel.DataAnnotations;

namespace Angular_NETCORE.Models
{
    public class Tbl_User
    {
        [Key]
        public int UserId { get; set; }

        public string UserName { get; set; }

        public string FatherName { get; set; }

        public string UserPassword { get; set; }

        public string UserRole { get; set; }

        public string FirstName { get; set; }

        public bool? IsEnable { get; set; }
    }
}
