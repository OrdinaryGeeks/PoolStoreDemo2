using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PoolStoreAPI.DTOs
{
    public class UserDTO
    {
        public string Email{get;set;} = default!;
        public string Token{get;set;} = default!;
        public string UserName{get;set;} = default!;
    }
}