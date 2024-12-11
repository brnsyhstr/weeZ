require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6283143560580"
global.namaowner = "Kenz"
global.namaowner2 = "Kenz"

//======== Setting Bot & Link ========//
global.namabot = "Botz Kenz" 
global.namabot2 = "Botz Kemz V1"
global.version = "v0.0.1"
global.foother = "Created By Kenz"
global.waowner = "https://wa.me/6283143560580"
global.linkgc = 'https://whatsapp.com/channel/0029VaqDsBP7oQhh8Qj1C83E'
global.linkgc2 = "https://whatsapp.com/channel/0029VaqDsBP7oQhh8Qj1C83E"
global.linkqris = "https://files.catbox.moe/vpw8uh.jpg"

//========== Setting Event ==========//
global.autoread = false
global.anticall = false
global.autoreadsw = false
global.owneroff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 8500
global.delayjpm = 8000

//========== Setting Foto ===========//
global.imgreply = fs.readFileSync("./media/Reply.jpg")
global.imgmenu = fs.readFileSync("./media/Menu.jpg")
global.imgslide = fs.readFileSync("./media/Slide.jpg")

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi "Belum Tersedia"
global.dana = "Belum Tersedia"
global.gopay = "Belum Tersedia"
global.ovo = "Belum Tersedia"
global.qris = fs.readFileSync("./media/Qris.jpg")
                             
//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang ✅", 
"wait": "⏳Memproses . . .", 
"group": "Command Ini Hanya Untuk Didalam Grup", 
"private": "Command Ini Hanya Untuk Di Private Chat", 
"admin": "Command Ini Hanya Untuk Admin Grup", 
"adminbot": "Command Ini Dapat Di Gunakan Ketika Bot Menjadi Admin", 
"owner": "Maaf Command Ini Hanya Untuk Bang *KenzMods.*"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})