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
                var baby = DB.Babies.Find(x => x.Id.Equals(babyId.Trim()) && (x.ParentId1.Equals(parentId.Trim()) || x.ParentId2.Equals(parentId.Trim())) && x.Year.Equals(year.Trim()));
                return baby != null;
            } catch (Exception e)
            {
                //Console.Error("error authenticating parent " + e);
                return false;
            }
        }

        [HttpPost]
        [Route("LoginNanny")]
        public Boolean LoginNanny(string userName, string pwd)
        {
            return true;
        }
        [Route("getBabyActivitiesLog")]
        public Baby GetBabyActivitiesLog()
        {
            return DB.Babies.First();
        }

        [Route("getBabies")]
        public List<Baby> GetBabies()
        {
            var babies = DB.Babies;
            foreach (var baby in babies)
            {
                baby.ActsLog.AddRange(DB.Activities.Where(act => act.Id == baby.Id));
            }

            return babies;
        }

        [Route("getBabyActivitiesLogById")]
        public Baby GetBabyById(string id)
        {
            var baby = DB.Babies.FirstOrDefault(b => b.Id == id);
            if (baby != null)
            {
                if (baby.ActsLog == null)
                    baby.ActsLog = new List<Activity>();
                baby.ActsLog.Clear();
                baby.ActsLog.AddRange(DB.Activities.Where(act => act.Id == baby.Id));
            }
            return baby;
        }

        [Route("getBabyAndActivities")]
        public List<Baby> GetBabyAndLastActivity()
        {
            var babies = DB.Babies;
            foreach (var baby in babies)
            {
                if (baby.ActsLog == null)
                    baby.ActsLog = new List<Activity>();
                baby.ActsLog.Clear();
                baby.ActsLog.AddRange(DB.Activities.Where(act => act.Id == baby.Id));
                var lastActivity = baby.ActsLog.OrderByDescending(b => b.CreateDate).FirstOrDefault();
                baby.LastActivity = lastActivity != null ? lastActivity.Type : ActivityType.GO_HOME;
                baby.AvialbleActivities = InitActivities();
            }

            return babies;
        }

        private List<AvailableActivity> InitActivities()
        {
            return new List<AvailableActivity>
            {
                new AvailableActivity{ActType = ActivityType.ARRIVE},
                new AvailableActivity{ActType = ActivityType.EAT},
                new AvailableActivity{ActType = ActivityType.WAKE_UP},
                new AvailableActivity{ActType = ActivityType.SLEEP},
                new AvailableActivity{ActType = ActivityType.CHANGED},
                new AvailableActivity{ActType = ActivityType.GO_HOME},
            };

        }

        [Route("saveNewActivity")]
        public bool SaveNewActivity(string babyId, int actType)
        {
            var fromDb = DB.Babies.FirstOrDefault(b => b.Id == babyId);
            if (fromDb == null)
                return false;

            var act = new Activity
            {
                ActId = DB.ActivityID++,
                Id = fromDb.Id,
                CreateDate = DateTime.Now,
                Type = (ActivityType)actType
            };
            act.Time = act.CreateDate.ToShortTimeString();
            fromDb.ActsLog.Add(act);
            DB.Activities.Add(act);
            return true;
        }

        [Route("editActivityRemark")]
        public bool EditActivityRemark(int actId, string remark)
        {
            var fromDb = DB.Activities.First(a => a.ActId == actId);
            if (fromDb == null)
                return false;

            fromDb.Remark = remark;
            return true;
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