import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const cocktails = {
  "Sweet & Sour": [
    { name: "百利甜马天尼", en: "Baileys Martini", ingredients: "Baileys, Vodka" },
    { name: "血与沙", en: "Blood And Sand", ingredients: "Whisky, Cherry Heering, Sweet Vermouth, Orange Juice" },
    { name: "自由古巴", en: "Free Cuba", ingredients: "Rum, Cola, Lemon Juice" },
    { name: "吉姆雷特", en: "Jimlet", ingredients: "Gin, Lemon Juice, Syrup" },
    { name: "长岛冰茶", en: "Long Island Ice Tea", ingredients: "Gin, Vodka, Tequila, Rum, Cointreau, Lemon Juice, Cola" },
    { name: "玛格丽特", en: "Margarita", ingredients: "Tequila, Cointreau, Lemon Juice, Salt" },
    { name: "莫吉托", en: "Mojito", ingredients: "Rum, Lemon Juice, Syrup, Mint, Soda Water" },
    { name: "橙花", en: "Orange Blossom", ingredients: "Gin, Orange Juice" },
    { name: "边车", en: "Side Car", ingredients: "Cognac, Cointreau, Lemon Juice" },
    { name: "龙舌兰日出", en: "Tequila Sunrise", ingredients: "Tequila, Orange Juice, Grenadine" },
    { name: "伏特加杏仁酸", en: "Vodka Mandelic Sour", ingredients: "Whisky, Amaretto, Lemon Juice" },
    { name: "威士忌酸", en: "Whiskey Sour", ingredients: "Whiskey, Lemon Juice, Syrup" },
    { name: "白色佳人", en: "White Lady", ingredients: "Gin, Cointreau, Lemon Juice" },
    { name: "椰林飘香", en: "Piña Colada", ingredients: "Rum, Pineapple Juice, Syrup" }
  ],
  "Bitter & Aroma": [
    { name: "竹子", en: "Bamboo", ingredients: "Sherry, Vermouth, Bitter" },
    { name: "咖啡马天尼", en: "Coffee Martini", ingredients: "Vodka, Coffee Liqueur, Syrup" },
    { name: "教父", en: "Godfather", ingredients: "Whisky, Almond Liqueur" },
    { name: "马天尼", en: "Martini", ingredients: "Gin, Vermouth, Bitter" },
    { name: "曼哈顿", en: "Manhattan", ingredients: "Whisky, Vermouth, Bitter" },
    { name: "尼格罗尼", en: "Negroni", ingredients: "Gin, Vermouth, Campari" },
    { name: "纸飞机", en: "Paper Plane", ingredients: "Whisky, Aperol, Amaro Nonino, Lemon Juice" },
    { name: "花花公子", en: "Playboy", ingredients: "Whisky, Vermouth, Bitter" },
    { name: "高级船员", en: "Quarter Deck", ingredients: "Rum, Sherry, Lemon Juice" },
    { name: "古典", en: "Old Fashioned", ingredients: "Whisky, Bitter, Syrup" },
    { name: "特立尼达酸", en: "Trinidad Sour", ingredients: "Whisky, Bitter, Almond Syrup, Lemon Juice" },
    { name: "阴谋诡计", en: "Hanky Panky", ingredients: "Gin, Vermouth, Bitter" },
    { name: "逢时", en: "Up To Date", ingredients: "Rye Whisky, Sherry, Grand Marnier" },
    { name: "遗言", en: "Last Word", ingredients: "Gin, Chartreuse, Cherry Liqueur, Lime" }
  ],
  "Special": [
    { name: "奶酪马天尼", en: "Cheese Martini", ingredients: "Milk Wash Gin, Vermouth" },
    { name: "黄瓜金菲士", en: "Cucumber Golden Fizz", ingredients: "Gin, Cucumber Juice, Syrup, Lemon Juice" },
    { name: "盘尼西林", en: "Penicillin", ingredients: "Whisky, Honey Syrup, Lemon Juice, Ginger" },
    { name: "话梅金汤力", en: "Plum Tonic", ingredients: "Plum Gin, Tonic Water" },
    { name: "茶香酸", en: "Tea Sour", ingredients: "Whisky Tea, Elderberry Liqueur, Tea Syrup, Lemon Juice" },
    { name: "话梅甜", en: "Sweet Plum", ingredients: "Plum Gin, Yakult" },
    { name: "威士忌奶茶", en: "Whisky Milk Tea", ingredients: "Whisky Tea, Baileys, Coconut Water" }
  ],
  "Winter Special": [
    { name: "大卫•马丁内斯", en: "David Martinez", ingredients: "Vodka, Cola" },
    { name: "杰克•威尔逊", en: "Jackie Wilson", ingredients: "Vodka, Ginger Beer, Lemon Juice, Love" },
    { name: "强尼•银手", en: "Johnny Silverhand", ingredients: "Tequila, Beer, Pepper" },
    { name: "热红酒", en: "Mulled Wine", ingredients: "Red Wine, Orange, Apple, Clove, Cardamom, Ginger, Cinnamon, Honey" },
    { name: "热托蒂", en: "Hot Toddy", ingredients: "Whisky, Honey, Lemon Juice" },
    { name: "黄油啤酒", en: "Butterbeer", ingredients: "Beer, Sugar, Cream" }
  ]
};

const whiskies = [
  { name: "Macallan 12", note: "Sherry Oak Cask" },
  { name: "Highland Park 13", note: "Single Cask" },
  { name: "Chivas 12" },
  { name: "Marker’s Mark" },
  { name: "Balvenie 16", note: "Triple Cask" },
  { name: "Bowmore 18", note: "Sherry Complex Cask" },
  { name: "Michter’s US-1", note: "Single Cask" }
];

const brandy = [
  { name: "Hennessy Very Special" }
];

export default function BarMenuSite() {
  const [selected, setSelected] = useState("Sweet & Sour");

  return (
    <div className="bg-neutral-900 text-white min-h-screen px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold">WAXY 酒吧菜单</h1>
        <p className="text-neutral-400 mt-2">欢迎来到我们的调酒世界</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🍸 鸡尾酒 Cocktail</h2>
        <Tabs value={selected} onValueChange={setSelected}>
          <TabsList className="flex flex-wrap justify-start gap-2 mb-4">
            {Object.keys(cocktails).map(category => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(cocktails).map(([category, drinks]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {drinks.map(drink => (
                  <Card key={drink.name} className="bg-neutral-800 border-none">
                    <CardContent className="p-4">
                      <h3 className="text-xl font-semibold">{drink.name} <span className="text-sm text-neutral-400">({drink.en})</span></h3>
                      <p className="text-sm mt-1 text-neutral-300">{drink.ingredients}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🥃 威士忌 Whisky</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whiskies.map(whisky => (
            <Card key={whisky.name} className="bg-neutral-800 border-none">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{whisky.name}</h3>
                {whisky.note && <p className="text-sm text-neutral-400">{whisky.note}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🍷 白兰地 Brandy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {brandy.map(item => (
            <Card key={item.name} className="bg-neutral-800 border-none">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-neutral-500 mt-12 border-t border-neutral-800 pt-6">
        <p>📍 地址：某城市某街道 WAXY 酒吧</p>
        <p>📞 联系方式：123-456-7890 | 微信号：waxybar</p>
        <p className="mt-2">© 2025 WAXY All rights reserved.</p>
      </footer>
    </div>
  );
}
