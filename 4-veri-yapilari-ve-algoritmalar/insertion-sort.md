# Insertion Sort

### 1. Dizimizin İlk Hali-> [22,27,16,2,18,6]

1. Adım -> [**2**,27,16,**22**,18,6]
>İlk indeximiz 22'yi en küçük sayı 2 ile yer değiştirdik. Yeni ilk indeximiz:2
2. Adım -> [2,**6**,16,22,18,**27**]
>İkinci indeximiz 27'yi 2'den sonraki en küçük sayı 6 ile yer değiştirdik. Yeni ikinci indeximiz:6
3. Adım -> [2,6,16,22,18,27]
>Üçüncü indeximiz 16'yı 6'dan sonraki en küçük sayı ile değiştirmek istiyorduk fakat sağında 16'dan küçük bir sayı bulamadığımız için pas geçiyoruz.
4. Adım -> [2,6,16,**18**,**22**,27]
>Dördüncü indeximiz 22'yi 16'dan sonraki en küçük sayı 18 ile yer değiştirdik. Yeni dördüncü indeximiz:18
5. Adım -> [2,6,16,18,22,27]
>Beşinci indeximiz 22'yi 18'den sonraki en küçük sayı ile değiştirmek istiyorduk fakat sağında 22'den küçük bir sayı bulamadığımız için pas geçiyoruz.
6. Adım -> [2,6,16,18,22,27]
>Sıralamanın son haline ulaştık.

### Big-O gösterimi -> **O(n²)**

### 18 sayısı dizinin ortasında olduğu için -> **Average Case**

#

### 2. Dizimizin İlk Hali-> [7,3,5,8,2,9,4,15,6]

##### İlk 4 adımı şu şekildedir:

1. Adım -> [**2**,3,5,8,**7**,9,4,15,6]
>İlk indeximiz 7'yi en küçük sayı 2 ile yer değiştirdik. Yeni ilk indeximiz:2
2. Adım -> [2,3,5,8,7,9,4,15,6]
>İkinci indeximiz 3'ü 2'den sonraki en küçük sayı ile değiştirmek istiyorduk fakat sağında 3'den küçük bir sayı bulamadığımız için pas geçiyoruz.
3. Adım -> [2,3,**4**,8,7,9,**5**,15,6]
>Üçüncü indeximiz 5'i 3'ten sonraki en küçük sayı 4 ile yer değiştirdik. Yeni üçüncü indeximiz:4
4. Adım -> [2,3,4,**5**,7,9,**8**,15,6]
>Dördüncü indeximiz 8'i 4'ten sonraki en küçük sayı 5 ile yer değiştirdik. Yeni dördüncü indeximiz:5