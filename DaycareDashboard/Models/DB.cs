using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DaycareDashboard.Models
{
    public static class DB
    {
        public static List<Baby> Babies;
        public static List<Activity> Activities;

        static DB()
        {
            Babies = new List<Baby>
            {
                new Baby {ID= "123456789", Name="Avi Kaplan", BirthDate= new DateTime(2016,12,03),ParentID1="parent1", ParentID2 = "parent2",NannyID="nanny",Year="2016"},
                new Baby {ID= "652347821", Name="Adi Gross ", BirthDate= new DateTime(2017,01,14),ParentID1="parent1", ParentID2 = "parent2",NannyID="nanny",Year="2016"},
                new Baby {ID= "855742135", Name="Panny Pandy", BirthDate= new DateTime(2016,11,29),ParentID1="parent1", ParentID2 = "parent2",NannyID="nanny",Year="2015"},
            };

            Activities = new List<Activity>
            {
                new Activity {BabyID="123456789", Type=ActivityType.ARRIVE,Time=new DateTime(2017,05,28,07,30,45) },
                new Activity {BabyID="652347821", Type=ActivityType.ARRIVE,Time=new DateTime(2017,05,28,07,33,15) },
                new Activity {BabyID="123456789", Type=ActivityType.EAT,Time=new DateTime(2017,05,28,08,30,45) },
                new Activity {BabyID="855742135", Type=ActivityType.EAT,Time=new DateTime(2017,05,28,08,52,05) },
            };
        }
                
               

    }
}