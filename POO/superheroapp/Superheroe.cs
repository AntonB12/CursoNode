

using System.Text;

class Superheroe : Heroe, Isuperheroe
{
    private string _Nombre;
    public int Id { get; set; } = 1;
    public override string Nombre
    {
        get
     {
        return _Nombre;
     } 
        set
     {
        _Nombre = value.Trim();
     }
    }

    public string NombreEIDentidadSecreta
    {
        get 
        {
            return $"{Nombre} ({IdentidadSecreta})";
        }
    }


    public string IdentidadSecreta { get; set; }
    public string Ciudad;
    public List<Superpoder> Superpoderes = new List<Superpoder>();
    public bool Puedevolar;

    public Superheroe()
    {
        Id = 1;
        Superpoderes = new List<Superpoder>();
        Puedevolar = false;
    }

    public string UsarSuperPoderes()
    {
        StringBuilder sb = new StringBuilder();
        foreach (var item in Superpoderes)
        {
            sb.AppendLine($"{NombreEIDentidadSecreta} esta usando el superpoder {item.Nombre}!!");
        }
        return sb.ToString();
    }
    public override string SalvarElMundo()
    {
        return $"{NombreEIDentidadSecreta} ha salvado el mundo";
    }
    public override string SalvarLaTierra()
    {
        //return base.SalvarLaTierra();
        return $"{NombreEIDentidadSecreta} ha salvado la tierra";
    }

}

class Superpoder
{
    public string Nombre;
    public string Descripcion;
    public NivelPoder Nivel;

    public Superpoder()
    {
        Nivel = NivelPoder.NivelUno;
    }
}

enum NivelPoder
{
    NivelUno,
    NivelDos,
    nivelTres
}

public record SuperheroeRecord(int Id, String Nombre, String IdentidadSecreta);


