CREATE OR ALTER VIEW smartnewgen.V_LabelCateg
AS select cat.idlabcat, lab.idslabel, lab.slabdesc, cat.slabcatdesc,  cat.labelskills, cat.slaactiv, cat.slacacomm,
		lab.slabactiv, lab.slabcomm
	from smartnewgen.snglabel_categ cat
	inner join  smartnewgen.snglabel lab
	on cat.idslabel = lab.idslabel;


select * from smartnewgen.V_LabelCateg where idlabcat = 1;

select * from snglabel s ;

select * from smartnewgen.V_LabelCateg where idlabcat = '?';

select * from sngentity s ;


select labelsng0_.idslabel as idslabel1_1_, labelsng0_.slabactiv as slabacti2_1_, 
labelsng0_.slabcomm as slabcomm3_1_, labelsng0_.slabdesc as slabdesc4_1_ from smartnewgen.snglabel labelsng0_ 
where labelsng0_.idslabel=1000;