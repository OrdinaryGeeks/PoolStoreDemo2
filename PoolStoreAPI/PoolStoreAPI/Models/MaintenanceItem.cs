
namespace PoolStoreAPI.Models{
public class MaintenanceItem{

    public int Id{get;set;}

    //Product Id of what is needed
    public int ItemId{get;set;}

    //when a new maintenance is scheduled
    public int MaintenanceId{get;set;}

    //last time maintenance performed on this item or day item installed
    public int LastMaintenanceId{get;set;}

    
}
}