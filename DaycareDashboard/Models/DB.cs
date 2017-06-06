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
        public static int ActivityID;
        static DB()
        {

            Babies = new List<Baby>
            {
                new Baby {Id= "1", Name="Talia Birenzweig", BirthDate= new DateTime(2016,12,03),ParentId1="yochi", ParentId2 = "ruvi",NannyId="nanny", Year="2016",
                    ActsLog = new List<Activity>()
                  

                },
               
                new Baby {Id= "2", Name="Ari Rozenkrantz ", BirthDate= new DateTime(2017,01,14),ParentId1="rivi", ParentId2 = "moti",NannyId="nanny", Year="2016",
                    ActsLog = new List<Activity>()
                   
                },
                new Baby {Id= "3", Name="Itzik  Rozenkrantz", BirthDate= new DateTime(2016,11,29),ParentId1="rivi", ParentId2 = "moti",NannyId="nanny", Year="2016",
                    ActsLog=new List<Activity>()
                   

                },
            };
            Activities = new List<Activity>
            {
                new Activity {ActId = 1, Id="1", Type=ActivityType.ARRIVE,CreateDate=new DateTime(2017,05,28,07,30,45) , Time="07:30"},
                new Activity {ActId = 2, Id="2", Type=ActivityType.ARRIVE,CreateDate=new DateTime(2017,05,28,07,33,15), Time ="07:33" },
                new Activity {ActId = 3, Id="1", Type=ActivityType.EAT,CreateDate=new DateTime(2017,05,28,08,30,45),Time ="08:30", Remark="Formula 120ml" },
                new Activity {ActId = 4, Id="3", Type=ActivityType.EAT,CreateDate=new DateTime(2017,05,28,08,52,05), Time = "08:52" },

                new Activity {ActId = 5, Id="3", Type=ActivityType.ARRIVE,CreateDate=new DateTime(2017,06,06), Time = "08:00" },
                new Activity {ActId = 6, Id="3", Type=ActivityType.EAT,CreateDate=new DateTime(2017,06,06), Time = "09:03" , Remark="Fruit: banna, apple, peach"},
                new Activity {ActId = 7, Id="3", Type=ActivityType.CHANGED,CreateDate=new DateTime(2017,06,06), Time = "09:32" },
                new Activity {ActId = 8, Id="3", Type=ActivityType.SLEEP,CreateDate=new DateTime(2017,06,06), Time = "09:45" },
                new Activity {ActId = 9, Id="3", Type=ActivityType.WAKE_UP,CreateDate=new DateTime(2017,06,06), Time = "12:30" },
                new Activity {ActId = 9, Id="3", Type=ActivityType.CHANGED,CreateDate=new DateTime(2017,06,06), Time = "12:35" },
                new Activity {ActId = 10, Id="3", Type=ActivityType.EAT,CreateDate=new DateTime(2017,06,06), Time = "12:39", Remark="soup & meat" },
                new Activity {ActId = 11, Id="3", Type=ActivityType.CHANGED,CreateDate=new DateTime(2017,06,06), Time = "13:00" ,Remark ="oops.. he did it again ;) "},
                new Activity {ActId = 12, Id="3", Type=ActivityType.EAT,CreateDate=new DateTime(2017,06,06), Time = "15:00" , Remark="Formula 120ml"},
                new Activity {ActId = 13, Id="3", Type=ActivityType.GO_HOME,CreateDate=new DateTime(2017,06,06), Time = "16:00" },

                new Activity {ActId = 14, Id="1", Type=ActivityType.ARRIVE,CreateDate=new DateTime(2017,06,06), Time = "08:05" },
                new Activity {ActId = 15, Id="1", Type=ActivityType.EAT,CreateDate=new DateTime(2017,06,06), Time = "09:03" , Remark="Formula 180ml"},
                new Activity {ActId = 16, Id="1", Type=ActivityType.CHANGED,CreateDate=new DateTime(2017,06,06), Time = "09:32" },
                new Activity {ActId = 17, Id="1", Type=ActivityType.SLEEP,CreateDate=new DateTime(2017,06,06), Time = "10:10" },
                new Activity {ActId = 18, Id="1", Type=ActivityType.WAKE_UP,CreateDate=new DateTime(2017,06,06), Time = "12:15" },
                new Activity {ActId = 19, Id="1", Type=ActivityType.EAT,CreateDate=new DateTime(2017,06,06), Time = "12:35",Remark="Formula 150ml " },
                new Activity {ActId = 20, Id="1", Type=ActivityType.CHANGED,CreateDate=new DateTime(2017,06,06), Time = "12:45",  },
                new Activity {ActId = 21, Id="1", Type=ActivityType.SLEEP,CreateDate=new DateTime(2017,06,06), Time = "13:00" ,Remark="so tierd..."},
                new Activity {ActId = 22, Id="1", Type=ActivityType.WAKE_UP,CreateDate=new DateTime(2017,06,06), Time = "15:30"},
                new Activity {ActId = 22, Id="1", Type=ActivityType.EAT,CreateDate=new DateTime(2017,06,06), Time = "15:32" , Remark="Formula 180ml"},
                new Activity {ActId = 23, Id="1", Type=ActivityType.GO_HOME,CreateDate=new DateTime(2017,06,06), Time = "16:00" },

            };

            ActivityID = Activities.Last().ActId+1;
        }

    }
}