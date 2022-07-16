-- Execute from source database
COPY (SELECT * FROM produits) TO 'C:\Users\Public\produits.csv';
-- Execute from target database
COPY produits from 'C:\Users\Public\produits.csv';
