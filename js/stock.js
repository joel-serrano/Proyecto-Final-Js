class Zapatillas {
    constructor(id, nombre, precio, img, cantidad){
        this.id = id
        this.nombre = nombre.toUpperCase()
        this.precio = parseFloat(precio)
        this.img = img
        this.cantidad = cantidad
    }
    sumarIva(){
        this.precio = this.precio * 1.21
    }
}

const stockproductos = []
stockproductos.push(new Zapatillas("1","Nike Air Force 1",40000, "../src/img/Zapas/NikeAirForce1Low.png",1))
stockproductos.push(new Zapatillas("2","Nike SB Dunk Low",20000, "../src/img/Zapas/NikeSBDunkLowPro.png",1))
stockproductos.push(new Zapatillas("3","Nike Airmax 97",30000, "../src/img/Zapas/NikeAirMax97.png",1))
stockproductos.push(new Zapatillas("4","Nike Running",25000, "../src/img/Zapas/NikeRunningQuest.png",1))
stockproductos.push(new Zapatillas("5","Nike Mercurial",30000, "../src/img/Zapas/NikeBotinesMercurialSuperfly.png",1))
stockproductos.push(new Zapatillas("6","Adidas Yeezy",40000, "../src/img/Zapas/AdidasYeezyUtility.png",1))
stockproductos.push(new Zapatillas("7","Adidas Celox",20000, "../src/img/Zapas/AdidasOriginalsOzweegoCelox.png",1))
stockproductos.push(new Zapatillas("8","Adidas Superstar",30000, "../src/img/Zapas/AdidasSuperstar.png",1))
stockproductos.push(new Zapatillas("9","Adidas Duramo Running",25000, "../src/img/Zapas/AdidasDuramoRunning.png",1))
stockproductos.push(new Zapatillas("10","Adidas Predator",30000, "../src/img/Zapas/AdidasBotinesPredatorBoots.png",1))
stockproductos.push(new Zapatillas("11","Fila Grant Hill 96",40000, "../src/img/Zapas/FilaGrantHill96.png",1))
stockproductos.push(new Zapatillas("12","Fila Rush",22000, "../src/img/Zapas/FilaRush.png",1))
stockproductos.push(new Zapatillas("13","Fila Lifestyle White",30000, "../src/img/Zapas/FilaLifestyleWhite.png",1))
stockproductos.push(new Zapatillas("14","Fila Renno Running",25000, "../src/img/Zapas/FilaRennoRunning.png",1))
stockproductos.push(new Zapatillas("15","Puma Deviate",40000, "../src/img/Zapas/PumaDeviate.png",1))
stockproductos.push(new Zapatillas("16","Puma Running",18000, "../src/img/Zapas/PumaWildRiderRunning.png",1))
stockproductos.push(new Zapatillas("17","Puma Rs X2",25000, "../src/img/Zapas/PumaRSX2.jpg",1))
stockproductos.push(new Zapatillas("18","Puma Mirage",34000, "../src/img/Zapas/PumaMirage.png",1))
stockproductos.push(new Zapatillas("19","Puma Mirage Sport",26000, "../src/img/Zapas/PumaMirageSport.png",1))
stockproductos.push(new Zapatillas("20","Puma Botines",30000, "../src/img/Zapas/PumaBotines.png",1))

for (const precioz of stockproductos)
    precioz.sumarIva()
    console.log(stockproductos)