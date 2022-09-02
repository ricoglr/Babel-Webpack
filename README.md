# Babel-Webpack

### Webpack Nedir ?
Webpack, JavaScript için ücretsiz ve açık kaynaklı bir modül paketleyicidir.
JavaScript dosyalarının artması beraberinde web sayfalarının yavaş açılmasına neden olur.
Bu yavaşlığın önüne geçebilmek için JavaScript dosyalarının birleştirilmesi gerekir.

JavaScript dosyalarını birleştirmek için Grunt, Gulp veya çeşitli web araçları kullanılabilir.
Ancak bu araçlar tüm JavaScript dosyalarını aralarındaki ilişkiyi bakmadan sırayla birleştirir.
Webpack birleştirme işini JavaScript dosyaları arasındaki ilişkiye CommonJS, AMD, ES6 Module vb. kullanarak yapar.
Webpack için geliştirilen loaders ve plugins kullanılarak SASS derlemesi, TypeScript derlemesi vb. ön işleme işlemleri de yapılır.

![images](https://miro.medium.com/max/700/1*2_LVUWolpKBMPAscrmjQtA.png)

### Webpack Paketleri Nasıl Kurulur ?
Webpack kurulumu için bilgisayarınızda Node.js ve NPM aracının kurulu olması gerekir.
Webpack kurulumunda öncelikle webpack ve webpack-cli modüllerinin yüklenmesi gerekir.

`npm install webpack webpack-cli -g`

Projede kullanılan modüllerin bağımlılığını eklemek için NPM aracı ile package.json dosyasının oluşturulması faydalı olacaktır.
Proje için package.json dosyasını adım adım oluşturmak için  `npm init` diyebilirsiniz 
default ayarlarla kurmak için `npm init -y`

Webpack ve Webpack modüllerin package.json dosyasına geliştirici bağımlılığı olarak eklenmesi taşınabilirlik için faydalı olacaktır.

`npm install webpack webpack-cli --save-dev`

Gerekli modüller indirildikten sonra loaders ile ilgili ayarlar webpack.config.js dosyasına yazılarak webpack tarafından işlenmeye hazır hale getirilir.

### Babel Nedir?
Babel bir javascript transcompilerdır. Yani javascript’in bir versiyonunda (örneğin EcmaScript7 ile yazılmış) yazılmış bir kodu, tüm tarayıcıların desteklediği EcmaScript5 koduna çevirmek için kullanılır. Bunun yanında reactjs vb.. çerçevelerin kullandığı JSX uzantılı dosyaları da EcmaScript5’e çevirebilmektedir.

### Babel Kurulumu
İlk olarak gerekli modüller indirilir.

 `npm install babel-loader`
 
 `npm install babel-core`
 
 `npm install babel/preset-env --save-dev`

Modül css-loader ve style-loader modüllerine ihtiyaç duyduğundan bu modüllerde indirilir.
  `npm install style-loader css-loader --save-dev`
Modüller indirildikten sonra loaders ile ilgili ayarlar webpack.config.js içerisine yazılır.

### Webpack dev server Paket Kurulumu
Webpack dev server webpack işlemlerini yapar ve geliştirilen uygulama için bir web sunucusu oluşturmaya imkan verir.
  `npm install webpack-dev-server -g`

Aşağıdaki komut ile webpack dev server derleme işlemini yapar ve bir sunucu oluşturur.
  `webpack-dev-server`
  
  In this Readme, I gave brief information about Babel Webpack.
  I showed these commands how I downloaded the packages I used in the repository I shared.
