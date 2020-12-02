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
                optionsBuilder.UseSqlServer("Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=test_core;Data Source=DESKTOP-3H036CO\\SQLEXPRESS");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
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
                entity.HasKey(e => e.FeeId);

                entity.ToTable("Tbl_Fee");

                entity.Property(e => e.FeeId).HasColumnName("FeeID");

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Deleted)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('N')")
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

                entity.HasOne(d => d.CollectedByNavigation)
                    .WithMany(p => p.TblFeeCollectedByNavigations)
                    .HasForeignKey(d => d.CollectedBy)
                    .HasConstraintName("FK_Tbl_Fee_Tbl_User");

                entity.HasOne(d => d.DeletedByNavigation)
                    .WithMany(p => p.TblFeeDeletedByNavigations)
                    .HasForeignKey(d => d.DeletedBy)
                    .HasConstraintName("FK_Tbl_Fee_Tbl_User1");

                entity.HasOne(d => d.Session)
                    .WithMany(p => p.TblFees)
                    .HasForeignKey(d => d.SessionId)
                    .HasConstraintName("FK_Tbl_Fee_Tbl_Session");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.TblFees)
                    .HasForeignKey(d => d.StudentId)
                    .HasConstraintName("FK_Tbl_Fee_Tbl_Student");
            });

            modelBuilder.Entity<TblMiscFee>(entity =>
            {
                entity.HasKey(e => e.MiscFeeId);

                entity.ToTable("Tbl_MiscFee");

                entity.Property(e => e.MiscFeeId).HasColumnName("MiscFeeID");

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Deleted)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('N')");

                entity.Property(e => e.SessionId).HasColumnName("SessionID");

                entity.Property(e => e.StudentId).HasColumnName("StudentID");

                entity.HasOne(d => d.CollectedByNavigation)
                    .WithMany(p => p.TblMiscFees)
                    .HasForeignKey(d => d.CollectedBy)
                    .HasConstraintName("FK_Tbl_MiscFee_Tbl_User");

                entity.HasOne(d => d.Session)
                    .WithMany(p => p.TblMiscFees)
                    .HasForeignKey(d => d.SessionId)
                    .HasConstraintName("FK_Tbl_MiscFee_Tbl_Session");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.TblMiscFees)
                    .HasForeignKey(d => d.StudentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Tbl_MiscFee_Tbl_Student");
            });

            modelBuilder.Entity<TblSession>(entity =>
            {
                entity.HasKey(e => e.SessionId);

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
                    .HasName("PK__Tbl_Sess__CEFD079F5AC31CE2");

                entity.ToTable("Tbl_SessionSettings");

                entity.Property(e => e.SessionSettingId).HasColumnName("SessionSettingID");

                entity.Property(e => e.CreatedDate).HasColumnType("date");

                entity.Property(e => e.SessionId).HasColumnName("SessionID");

                entity.Property(e => e.StudentId).HasColumnName("StudentID");

                entity.Property(e => e.UpdatedDate).HasColumnType("date");
            });

            modelBuilder.Entity<TblStudent>(entity =>
            {
                entity.HasKey(e => e.StudentId)
                    .IsClustered(false);

                entity.ToTable("Tbl_Student");

                entity.HasIndex(e => e.AdmissionNo, "IX_Tbl_Student")
                    .IsUnique();

                entity.Property(e => e.StudentId).HasColumnName("StudentID");

                entity.Property(e => e.Address)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AdmissionFee).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.AdmissionNo)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CurrentClass).HasDefaultValueSql("((0))");

                entity.Property(e => e.DateOfBirth)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfSlc)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("DateOfSLC")
                    .HasDefaultValueSql("('No')");

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

                entity.Property(e => e.MonthlyFee)
                    .HasColumnType("numeric(18, 0)")
                    .HasDefaultValueSql("((0))");

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

                entity.HasOne(d => d.ClassAdmitedNavigation)
                    .WithMany(p => p.TblStudentClassAdmitedNavigations)
                    .HasForeignKey(d => d.ClassAdmited)
                    .HasConstraintName("FK_Tbl_Student_Tbl_Class1");

                entity.HasOne(d => d.ClassLeftSchoolNavigation)
                    .WithMany(p => p.TblStudentClassLeftSchoolNavigations)
                    .HasForeignKey(d => d.ClassLeftSchool)
                    .HasConstraintName("FK_Tbl_Student_Tbl_Class2");

                entity.HasOne(d => d.CurrentClassNavigation)
                    .WithMany(p => p.TblStudentCurrentClassNavigations)
                    .HasForeignKey(d => d.CurrentClass)
                    .HasConstraintName("FK_Tbl_Student_Tbl_Class");
            });

            modelBuilder.Entity<TblStudentMonthlyFee>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Tbl_Student_MonthlyFee");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Reason).HasMaxLength(500);

                entity.Property(e => e.SessionId).HasColumnName("SessionID");

                entity.Property(e => e.StudentId).HasColumnName("StudentID");

                entity.Property(e => e.StudentMonthlyFeeId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("StudentMonthlyFeeID");

                entity.HasOne(d => d.Session)
                    .WithMany()
                    .HasForeignKey(d => d.SessionId)
                    .HasConstraintName("FK_Tbl_Student_MonthlyFee_Tbl_Session");

                entity.HasOne(d => d.Student)
                    .WithMany()
                    .HasForeignKey(d => d.StudentId)
                    .HasConstraintName("FK_Tbl_Student_MonthlyFee_Tbl_Student");
            });

            modelBuilder.Entity<TblUser>(entity =>
            {
                entity.HasKey(e => e.UserId);

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
