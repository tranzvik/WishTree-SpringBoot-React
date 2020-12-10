describe wish_details;
drop table wish_details;

create table wish_details(
WISHID INTEGER NOT NULL,
WISHDETAILS VARCHAR2(50) NOT NULL,
EMPLOYEEID NUMBER(38),
EMPLOYEENAME VARCHAR2(50),
EMAIL VARCHAR2(100),
PHONENUMBER NUMBER(38),
WISHTAKEN NUMBER(38)
);

select * from wish_details;

Insert into wish_details values(1, 'xxxxxxx',00000,'xxxx',000000000,'ChembakaAmma(84)  Vicks, painkiller oil, rasanadi powder','0');
Insert into wish_details values(2, 'xxxxxxx',00000,'xxxx',000000000,'MeenakshiAmma(70)	Powder, nail-cutter, White under-skirt',0);
Insert into wish_details values(3, 'xxxxxxx',00000,'xxxx',000000000,'BhavaniAmma(73)	Slipper (Size: 7), under-skirt',0);
Insert into wish_details values(4, 'xxxxxxx',00000,'xxxx',000000000,'SarasammaAmma(68)	Bulb, moove, vicks, Ponds powder, Apple',0);
Insert into wish_details values(5, 'xxxxxxx',00000,'xxxx',000000000,'Latha(47)	        Slipper(Size: 6)',0);
Insert into wish_details values(6, 'xxxxxxx',00000,'xxxx',000000000,'Girija(65)			Vicks, slipper(Size: 6), powder, tooth-brush',0);
Insert into wish_details values(7, 'xxxxxxx',00000,'xxxx',000000000,'Rukmini(65)		Powder, housecoat size',0);
Insert into wish_details values(8, 'xxxxxxx',00000,'xxxx',000000000,'Ambili Thankom(70)	Toothbrush, nycil-powder',0);
Insert into wish_details values(9,'xxxxxxx',00000,'xxxx',000000000,'Maniyamma(69)		Slipper(Size:6), Dates, Apple',0);
Insert into wish_details values(10, 'xxxxxxx',00000,'xxxx',000000000,'Rama Devi(84)     Vicks, slipper (Size: 5), toothbrush, torch, nail cutter, ponds powder, Dates',0);
Insert into wish_details values(11,'xxxxxxx',00000,'xxxx',000000000,'Vasantha(53)		Housecoat Size (?)',0);
Insert into wish_details values(12,'xxxxxxx',00000,'xxxx',000000000,'SaraswathiAmma(73)	White blouse-piece, slipper(Size: 7), Apple',0);
Insert into wish_details values(13,'xxxxxxx',00000,'xxxx',000000000,'Sarala Amma(64)	Powder, vicks, white under-skirt, Painkiller-oil',0);
Insert into wish_details values(14,'xxxxxxx',00000,'xxxx',000000000,'Bed Ridden          Organizational Wish Side-Table',0);
Insert into wish_details values(15,'xxxxxxx',00000,'xxxx',000000000,'Bed Ridden          Organizational Wish Side-Table',0);
Insert into wish_details values(16,'xxxxxxx',00000,'xxxx',000000000,'Bed Ridden          Organizational Wish Side-Table',0);


delete from wish_details;




