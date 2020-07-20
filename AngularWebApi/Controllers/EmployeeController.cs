using AngularWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularWebApi.Controllers
{
    public class EmployeeController : ApiController
    {
        public List<tEmployee> Get()
        {
            using (OrganizationDBEntities db = new OrganizationDBEntities())
            {
                return db.tEmployees.ToList();
            }
        }
        public tEmployee Get(string code)
        {
            using (OrganizationDBEntities db = new OrganizationDBEntities())
            {
                var emp = db.tEmployees.Where(x=>x.code==code).FirstOrDefault();
                return emp;
            }
        }
        [HttpGet]
        [Route("{test}-in-{city}")]
        public List<tEmployee> test(string test,string city="", string code="emp01")
        {
            using (OrganizationDBEntities db = new OrganizationDBEntities())
            {
                return db.tEmployees.Where(x => x.code == code).ToList();
            }
        }
    }
}
