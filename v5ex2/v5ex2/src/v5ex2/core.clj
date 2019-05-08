(ns v5ex2.core
  (:gen-class))

(defn -main
  []
  ;; repl komennot
  (+ 4(* 2 5))
  
  (+ 1(+ 2(+ 3(+ 4(+ 5)))))
  
  ((fn [name] (str "Tervetuloa Tylypahkaan " name))"aaro")
  
  (def mymap {:name {:first "Urho", :middle "Kaleva", :last "Kekkonen"}})
  ((mymap :name):middle)
  
)
(defn square
  [number]
  (* number number))

(defn karkausvuosi?
  [vuosi]
  (if(= (mod vuosi 4) 0)
          (if(= (mod vuosi 100) 0)
                  (if(= (mod vuosi 400) 0)
                      true
                      false
                  )
          
                  true
          )   
          false
          )
)
