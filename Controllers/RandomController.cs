using System;
using Microsoft.AspNetCore.Mvc;

namespace csharp_short_polling.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RandomController
    {
        private static Random random = new Random();

        [HttpGet]
        public object GetAction()
        {
            return new {
                Random = random.Next(0, 100),
                Created = DateTime.Now,
            };
        }
    }
}
