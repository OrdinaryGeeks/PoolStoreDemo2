


namespace PoolStoreAPI.Models{

public class Location{


public int LocationId{get;set;}
public string StreetAddress{get;set;}= default!;

public string City{get;set;} = default!;
public string State{get;set;} = default!;

public string Name{get;set;} = default!;

public string LocationImageURL{get;set;} = default!;

public string PhoneNumber{get;set;} = default!;

}
}