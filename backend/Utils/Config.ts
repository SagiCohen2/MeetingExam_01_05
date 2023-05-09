// class Config {
//     public WebPort = 4000;
//     public mySQLhost = "localhost";
//     public mySQLuser = "root";
//     public mySQLpass = "12345678";
//     public mySQLdatabase = "exam";
// }

// const config = new Config;

// export default config;

class Config {
    //todo: change the information....
    public WebPort = 8080; //backend port
    public mySQLhost = "localhost";
    public mySQLuser = "root";
    public mySQLpass = "12345678";
    public mySQLdatabase = "exam";
  
    //for example
    //   public mySQLhost = "localhost";
    //   public mySQLuser = "root";
    //   public mySQLpass = "12345678";
    //   public mySQLdatabase = "test";
  }
  
  const config = new Config();
  export default config;