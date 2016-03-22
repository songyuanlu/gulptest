public void ProcessRequest(HttpContext context)
{
    context.Response.ContentType = "text/plain";

    HttpPostedFile postedFile = context.Request.Files[0];
    string savePath = "/upload/images/";
    int filelength = postedFile.ContentLength;
    int fileSize = 163600; //150K
    string fileName = "-1"; //返回的上传后的文件名
    if (filelength <= fileSize)
    {

        byte[] buffer = new byte[filelength];

        postedFile.InputStream.Read(buffer, 0, filelength);

        fileName = UploadImage(buffer, savePath, "jpg");

    }

    context.Response.Write(fileName);
}

public static string UploadImage(byte[] imgBuffer, string uploadpath, string ext)
{
    try
    {
        System.IO.MemoryStream m = new MemoryStream(imgBuffer);

        if (!Directory.Exists(HttpContext.Current.Server.MapPath(uploadpath)))
            Directory.CreateDirectory(HttpContext.Current.Server.MapPath(uploadpath));

        string imgname = CreateIDCode() + "." + ext;

        string _path = HttpContext.Current.Server.MapPath(uploadpath) + imgname;

        Image img = Image.FromStream(m);
        if (ext == "jpg")
            img.Save(_path, System.Drawing.Imaging.ImageFormat.Jpeg);
        else
            img.Save(_path, System.Drawing.Imaging.ImageFormat.Gif);
        m.Close();

        return uploadpath + imgname;
    }
    catch (Exception ex)
    {
        return ex.Message;
    }

}

public static string CreateIDCode()
{
    DateTime Time1 = DateTime.Now.ToUniversalTime();
    DateTime Time2 = Convert.ToDateTime("1970-01-01");
    TimeSpan span = Time1 - Time2;   //span就是两个日期之间的差额   
    string t = span.TotalMilliseconds.ToString("0");

    return t;
}