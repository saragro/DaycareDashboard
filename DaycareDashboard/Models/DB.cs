﻿using System;
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
                new Baby {Id= "1", Name="Talia Birenzweig", BirthDate= new DateTime(2016,12,03),ParentId1="yochi", ParentId2 = "ruvi",NannyId="nanny",
                    ActsLog = new List<Activity>
                    {
                         new Activity {Id="1", Type=ActivityType.ARRIVE,CreateDate=new DateTime(2017,05,28,07,30,45) , Time="07:30"},
                         new Activity {Id="1", Type=ActivityType.EAT,CreateDate=new DateTime(2017,05,28,08,30,45),Time ="08:30", Remark="Formula 120ml" }
                    }
                },
                new Baby {Id= "2", Name="Ari Rozenkrantz ", BirthDate= new DateTime(2017,01,14),ParentId1="rivi", ParentId2 = "moti",NannyId="nanny",
                    ActsLog = new List<Activity>
                    {
                        new Activity {Id="2", Type=ActivityType.ARRIVE,CreateDate=new DateTime(2017,05,28,07,33,15), Time ="07:33" },
                    }
                },
                new Baby {Id= "3", Name="Itzik  Rozenkrantz", BirthDate= new DateTime(2016,11,29),ParentId1="rivi", ParentId2 = "moti",NannyId="nanny"
                    ,ActsLog=new List<Activity>
                    {
                        new Activity {Id="3", Type=ActivityType.EAT,CreateDate=new DateTime(2017,05,28,08,52,05), Time = "08:52" },
                    }

                },
            };
        }
                
               

    }
}