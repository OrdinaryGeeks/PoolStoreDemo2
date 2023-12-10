


namespace PoolStoreAPI.Models{
public class Item{
 public int ItemId{get;set;}
 public float Cost{get;set;}
 public string Name{get;set;} = default!;
 public string ImageURL{get;set;} = default!;
 public int LocationId{get;set;}
 public int AvailableInventory{get;set;}

}
}