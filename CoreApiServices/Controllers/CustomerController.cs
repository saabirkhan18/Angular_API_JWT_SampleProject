using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace CoreApiServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        //[HttpGet]
        //[Authorize]
        //public IEnumerable<string> Get()
        //{
        //    return new[] { "saabir", "Rohit" };
        //}

        [HttpGet]
        [Authorize]
        public IActionResult Get()
        {
            List<Student> students = new List<Student>()
            {
                new Student { id = "1", age = "30", student_name = "Rohit1" },
                new Student { id = "2", age = "32", student_name = "Rohit2" },
                new Student { id = "3", age = "33", student_name = "Rohit3" }
                };
            return Ok(students);
            //return new List<Student> ;
        }
        //[HttpGet]
        //[Authorize]
        //public string Get()
        //{
        //    var options = new JsonSerializerOptions
        //    {
        //        WriteIndented = true,
        //        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,

        //    };

        //    return System.Text.Json.JsonSerializer.Serialize((new[] { "saabir", "Rohit" }).ToList(), options);
        //}

        [HttpPost("getstudent")]
        [Authorize]
        public List<Student> GetStudent()
        {
            return new List<Student> { new Student { id = "1", age = "30", student_name = "Rohit1" }, new Student { id = "2", age = "32", student_name = "Rohit2" }, new Student { id = "3", age = "33", student_name = "Rohit3" } };
        }
    }

    public class Student
    {
        public string id { set; get; }
        public string student_name { set; get; }
        public string age { set; get; }
    }
}
