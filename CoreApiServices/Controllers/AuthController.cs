using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreApiServices.Models;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.Extensions.Configuration;

namespace CoreApiServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private  IConfiguration Configuration { get; }
        public AuthController(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        [HttpPost]
        [Route("login")]
        public IActionResult Login([FromBody] LoginModel user)
        {
            if (user == null)
            {
                return BadRequest("invalid client request");
            }
            else
            {
                if (user.Username == "saabir" && user.Password == "123456")
                {
                    //var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:Key"]));
                    //var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                    //var tokenOptions = new JwtSecurityToken(
                    //    issuer: "http://localhost:25104",
                    //    audience: "http://localhost:25104",
                    //    claims: new List<Claim>(),
                    //    expires: DateTime.Now.AddMinutes(30),
                    //    signingCredentials: signingCredentials
                    //    );

                    //var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
                    JwtTokenModel jwtTokenModel = new JwtTokenModel(Configuration);
                    return Ok(new { Token = jwtTokenModel.GetMyToken("saabir", "User") });
                }
                else
                {
                    return Unauthorized();
                }
            }
        }


        [HttpPost]
        [Route("logout")]
        public IActionResult Logout([FromBody] LoginModel user)
        {
            return Unauthorized();
        }
    }
}
