

namespace PoolStoreApi.Models{

public class CustomerLocation{

    public int Id{get;set;}
    public int CustomerId{get;set;}

    public string StreetAddress{get;set;}= default!;

public string City{get;set;} = default!;
public string State{get;set;} = default!;

public string Name{get;set;} = default!;
    public int LocationId{get;set;}

}
}