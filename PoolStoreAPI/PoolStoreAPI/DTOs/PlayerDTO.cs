using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PoolStoreAPI.Models
{
    public class PlayerDTO
    {
  public string UserName{get;set;} = default!;
  public int Score {get;set;}

  public string Email{get;set;} = default!;

  public int GameStateID{get;set;}
}

    }
