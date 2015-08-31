var fs = require('fs');

// cоздание, переименование и удаление файла
fs.writeFile('file.tmp', 'data', function(err) {
  if (err) throw err;

  fs.rename('file.tmp', 'new.tmp', function(err) {
    if (err) throw err;

    fs.unlink('new.tmp', function(err) {
      if (err) throw err;
    });
  });

});


// проверка наличия файла
//fs.stat(__filename, function(err, stats) {
//  console.log(stats.isFile());
//  console.log(stats);
//});


// чтение и преобразование в строку файла
//fs.readFile("lalalal", {encoding: 'utf-8'}, function(err, data) {
//  if (err) {
//    if (err.code == 'ENOENT') {
//      console.error(err.message);
//    } else {
//      console.error(err);
//    }
//  } else {
//    console.log(data);
//  }
//});