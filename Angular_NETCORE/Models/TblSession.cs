using System;
using System.Collections.Generic;

#nullable disable

namespace Angular_NETCORE.Models
{
    public partial class TblSession
    {
        public int SessionId { get; set; }
        public string SessionName { get; set; }
        public bool? IsEnable { get; set; }
        public bool? IsActive { get; set; }
    }
}
