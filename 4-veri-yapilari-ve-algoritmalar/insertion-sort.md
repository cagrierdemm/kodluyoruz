# Insertion Sort

### İlk Hali-> [22,27,16,2,18,6]

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

### Big-O gösterimi -> O(n²)

### 18 sayısı dizinin ortasında olduğu için -> **Average Case**