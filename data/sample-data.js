window.QP_SAMPLE = {
 user:{name:"Alex Morgan",email:"alex@querypilot.dev"},
 projects:[{id:"p1",name:"Commerce Platform",description:"PostgreSQL performance review for the commerce application",created:"2026-10-12",members:["Alex Morgan","Sam Rivera"],role:"Owner"},{id:"p2",name:"Analytics Warehouse",description:"Reporting and analytics query tuning",created:"2026-10-20",members:["Alex Morgan"],role:"Owner"}],
 connections:[{id:"c1",name:"Commerce · Demo PostgreSQL",engine:"PostgreSQL (demo)",host:"demo.local",database:"commerce_demo",status:"demo",active:true}],
 schema:[
 {name:"customers",rows:24850,columns:[["id","bigint","PK"],["email","varchar(255)","UNIQUE"],["full_name","varchar(120)",""],["created_at","timestamp",""]],indexes:["customers_pkey (id)","customers_email_key (email)"]},
 {name:"orders",rows:182430,columns:[["id","bigint","PK"],["customer_id","bigint","FK → customers.id"],["status","varchar(24)",""],["total","numeric(10,2)",""],["created_at","timestamp",""]],indexes:["orders_pkey (id)"]},
 {name:"order_items",rows:526800,columns:[["id","bigint","PK"],["order_id","bigint","FK → orders.id"],["product_id","bigint","FK → products.id"],["quantity","integer",""],["unit_price","numeric(10,2)",""]],indexes:["order_items_pkey (id)","order_items_order_id_idx (order_id)"]},
 {name:"products",rows:12400,columns:[["id","bigint","PK"],["sku","varchar(40)","UNIQUE"],["name","varchar(180)",""],["category_id","bigint","FK → categories.id"],["price","numeric(10,2)",""]],indexes:["products_pkey (id)","products_sku_key (sku)"]},
 {name:"categories",rows:42,columns:[["id","bigint","PK"],["name","varchar(80)","UNIQUE"]],indexes:["categories_pkey (id)"]}
 ],
 queries:[
 {id:"q1",name:"Customer order history",sql:"SELECT * FROM orders WHERE customer_id = 1042 ORDER BY created_at DESC;",status:"Needs review",updated:"Today"},
 {id:"q2",name:"Revenue by category",sql:"SELECT c.name, SUM(oi.quantity * oi.unit_price) AS revenue FROM order_items oi JOIN products p ON p.id = oi.product_id JOIN categories c ON c.id = p.category_id WHERE DATE(oi.created_at) >= '2026-01-01' GROUP BY c.name ORDER BY revenue DESC;",status:"Optimized",updated:"Yesterday"},
 {id:"q3",name:"Product search",sql:"SELECT id, name, price FROM products WHERE name LIKE '%phone%' OR sku LIKE '%phone%';",status:"Needs review",updated:"Oct 22"}
 ],
 activities:[{text:"Analyzed Customer order history",time:"Today · 10:42 AM"},{text:"Added demo connection Commerce",time:"Today · 09:18 AM"},{text:"Saved Revenue by category query",time:"Yesterday · 4:26 PM"},{text:"Created Analytics Warehouse project",time:"Oct 20 · 2:10 PM"}],
 benchmarks:[{id:"b1",name:"Customer history · baseline vs indexed",before:184,after:31,costBefore:820,costAfter:96,rowsBefore:182430,rowsAfter:840,mode:"Simulated",date:"2026-11-22"}]
};