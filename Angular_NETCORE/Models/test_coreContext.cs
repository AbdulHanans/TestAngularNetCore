using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular_NETCORE.Models
{
    public class test_coreContext: DbContext
    {
        public test_coreContext(DbContextOptions<test_coreContext> options): base(options)
        {

        }

        public DbSet<Tbl_User> Tbl_Users { get; set; }
    }
}
