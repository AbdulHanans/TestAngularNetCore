using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Angular_NETCORE.Models
{
    public partial class test_coreContext : DbContext
    {
        public test_coreContext()
        {
        }

        public test_coreContext(DbContextOptions<test_coreContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Sysdiagram> Sysdiagrams { get; set; }
        public virtual DbSet<TblClass> TblClasses { get; set; }
        public virtual DbSet<TblFee> TblFees { get; set; }
        public virtual DbSet<TblMiscFee> TblMiscFees { get; set; }
        public virtual DbSet<TblSession> TblSessions { get; set; }
        public virtual DbSet<TblSessionSetting> TblSessionSettings { get; set; }
        public virtual DbSet<TblStudent> TblStudents { get; set; }
        public virtual DbSet<TblStudentMonthlyFee> TblStudentMonthlyFees { get; set; }
        public virtual DbSet<TblUser> TblUsers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-3H036CO\\SQLEXPRESS;Database=test_core;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Sysdiagram>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("sysdiagrams");

                entity.Property(e => e.Definition).HasColumnName("definition");

                entity.Property(e => e.DiagramId).HasColumnName("diagram_id");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(128)
                    .HasColumnName("name");

                entity.Property(e => e.PrincipalId).HasColumnName("principal_id");

                entity.Property(e => e.Version).HasColumnName("version");
            });

            modelBuilder.Entity<TblClass>(entity =>
            {
                entity.HasKey(e => e.ClassId);

                entity.ToTable("Tbl_Class");

                entity.Property(e => e.ClassId).HasColumnName("ClassID");

                entity.Property(e => e.ClassName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Priority).HasColumnName("priority");
            });

            modelBuilder.Entity<TblFee>(entity =>
            {
                entity.HasKey(e => e.FeeId)
                    .HasName("PK__Tbl_Fee__B387B209C0BE6406");

                entity.ToTable("Tbl_Fee");

                entity.Property(e => e.FeeId).HasColumnName("FeeID");

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Deleted)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.FeeMonth)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FeeYear)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MonthlyBalance)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("monthlyBalance");

                entity.Property(e => e.StudentId).HasColumnName("StudentID");
            });

            modelBuilder.Entity<TblMiscFee>(entity =>
            {
                entity.HasKey(e => e.MiscFeeId)
                    .HasName("PK__Tbl_Misc__39AAE53FA96961DA");

                entity.ToTable("Tbl_MiscFee");

                entity.Property(e => e.MiscFeeId).HasColumnName("MiscFeeID");

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Deleted)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SessionId).HasColumnName("SessionID");

                entity.Property(e => e.StudentId).HasColumnName("StudentID");
            });

            modelBuilder.Entity<TblSession>(entity =>
            {
                entity.HasKey(e => e.SessionId)
                    .HasName("PK__Tbl_Sess__C9F49270E7787EBD");

                entity.ToTable("Tbl_Session");

                entity.Property(e => e.SessionId).HasColumnName("SessionID");

                entity.Property(e => e.IsEnable).HasColumnName("isEnable");

                entity.Property(e => e.SessionName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblSessionSetting>(entity =>
            {
                entity.HasKey(e => e.SessionSettingId)
                    .HasName("PK__Tbl_Sess__CEFD079FF6EDA2B6");

                entity.ToTable("Tbl_SessionSettings");

                entity.Property(e => e.SessionSettingId).HasColumnName("SessionSettingID");

                entity.Property(e => e.CreatedDate).HasColumnType("date");

                entity.Property(e => e.SessionId).HasColumnName("SessionID");

                entity.Property(e => e.StudentId).HasColumnName("StudentID");

                entity.Property(e => e.UpdatedDate).HasColumnType("date");
            });

            modelBuilder.Entity<TblStudent>(entity =>
            {
                entity.HasKey(e => e.StudentId);

                entity.ToTable("Tbl_Student");

                entity.Property(e => e.StudentId).HasColumnName("StudentID");

                entity.Property(e => e.Address)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AdmissionFee).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.AdmissionNo)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfBirth)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfSlc)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("DateOfSLC");

                entity.Property(e => e.FatherCnic)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("FatherCNIC");

                entity.Property(e => e.FatherName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LandLineNumber)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MiscellaneousFee).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.MobileNumber)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MonthlyFee).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.MonthlyFeeUpdated).HasColumnName("monthlyFeeUpdated");

                entity.Property(e => e.Slcissued)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("SLCIssued");

                entity.Property(e => e.StudentName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UpdatedDate)
                    .HasColumnType("date")
                    .HasColumnName("updatedDate");
            });

            modelBuilder.Entity<TblStudentMonthlyFee>(entity =>
            {
                entity.HasKey(e => e.StudentMonthlyFeeId)
                    .HasName("PK__Tbl_Stud__E71971E017B611EF");

                entity.ToTable("Tbl_Student_MonthlyFee");

                entity.Property(e => e.StudentMonthlyFeeId).HasColumnName("StudentMonthlyFeeID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Reason).HasMaxLength(500);

                entity.Property(e => e.SessionId).HasColumnName("SessionID");

                entity.Property(e => e.StudentId).HasColumnName("StudentID");
            });

            modelBuilder.Entity<TblUser>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__Tbl_User__1788CCACFD498164");

                entity.ToTable("Tbl_User");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.FatherName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.IsEnable).HasColumnName("isEnable");

                entity.Property(e => e.UserName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserPassword)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserRole)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
