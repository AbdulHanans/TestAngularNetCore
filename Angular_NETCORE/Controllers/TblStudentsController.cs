using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Angular_NETCORE.Models;

namespace Angular_NETCORE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TblStudentsController : ControllerBase
    {
        private readonly test_coreContext _context;

        public TblStudentsController(test_coreContext context)
        {
            _context = context;
        }

        // GET: api/TblStudents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblStudent>>> GetTblStudents()
        {
            return await _context.TblStudents.ToListAsync();
        }

        // GET: api/TblStudents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblStudent>> GetTblStudent(int id)
        {
            var tblStudent = await _context.TblStudents.FindAsync(id);

            if (tblStudent == null)
            {
                return NotFound();
            }

            return tblStudent;
        }

        // PUT: api/TblStudents/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblStudent(int id, TblStudent tblStudent)
        {
            if (id != tblStudent.StudentId)
            {
                return BadRequest();
            }

            _context.Entry(tblStudent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblStudentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TblStudents
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TblStudent>> PostTblStudent(TblStudent tblStudent)
        {
            _context.TblStudents.Add(tblStudent);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblStudent", new { id = tblStudent.StudentId }, tblStudent);
        }

        // DELETE: api/TblStudents/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TblStudent>> DeleteTblStudent(int id)
        {
            var tblStudent = await _context.TblStudents.FindAsync(id);
            if (tblStudent == null)
            {
                return NotFound();
            }

            _context.TblStudents.Remove(tblStudent);
            await _context.SaveChangesAsync();

            return tblStudent;
        }

        private bool TblStudentExists(int id)
        {
            return _context.TblStudents.Any(e => e.StudentId == id);
        }
    }
}
