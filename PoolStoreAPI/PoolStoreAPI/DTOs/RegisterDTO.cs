using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PoolStoreAPI.DTOs
{
    public class RegisterDTO : LoginDTO
    {
        
           public string Email{get;set;} = default!;

           public bool Member{get;set;}
           public bool Maintenance{get;set;}
             public bool Admin{get;set;}
             public bool Customer{get;set;}
        
           
    }
}