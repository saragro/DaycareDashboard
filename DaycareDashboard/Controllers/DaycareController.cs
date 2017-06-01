using DaycareDashboard.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DaycareDashboard.Controllers
{
    [RoutePrefix("api/daycare")]
    public class DaycareController : ApiController
    {
        [HttpPost]
        [Route("LoginParent")]
        public Boolean LoginParent(string parentId ,string babyId, string year)
        {
            try
            {
                var baby = DB.Babies.Find(x => x.ID.Equals(babyId.Trim()) && (x.ParentID1.Equals(parentId.Trim()) || x.ParentID2.Equals(parentId.Trim())) && x.Year.Equals(year.Trim()));
                return baby != null;
            } catch (Exception e)
            {
                //Console.Error("error authenticating parent " + e);
                return false;
            }
        }

        [Route("GetBabyActivitiesLog")]
        public IEnumerable<string> GetBabyActivitiesLog()
        {
            return null;
        }

        [Route("GetBabies")]
        public List<Baby> GetBabies()
        {
            return DB.Babies;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}

//[RoutePrefix("api/heroes")]
//public class HeroesController : ApiController
//{
//    [Route("GetHeroes")]
//    public List<Hero> GetHeroes()
//    {
//        return DB.heroes;
//    }

//    [Route("edit")]
//    public bool Edit(Hero hero)
//    {
//        var fromDb = DB.heroes.FirstOrDefault(x => x.Id == hero.Id);
//        if (fromDb == null)
//            return false;

//        fromDb.Name = hero.Name;
//        return true;
//    }

//    [Route("remove")]
//    public bool Remove(int id)
//    {
//        var fromDb = DB.heroes.FirstOrDefault(x => x.Id == id);
//        if (fromDb == null)
//            return false;

//        DB.heroes.Remove(fromDb);
//        return true;
//    }
//}