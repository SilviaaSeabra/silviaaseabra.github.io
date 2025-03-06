import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Footer from "./components/ui/Footer";

export default function App() {
  return (
    <Router
      root={(props) => (
        <div class="flex flex-col min-h-screen bg-gradient-to-br from-white to-pink-50 transition-colors duration-300">
          {/* Subtle dot pattern overlay */}
          <div class="fixed inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(circle,_#ec4899_1px,_transparent_1px)] bg-[length:20px_20px]"></div>

          {/* Soft glow effects */}
          <div class="fixed top-0 left-[10%] w-[80%] h-[40%] bg-pink-200/5 rounded-[100%] blur-[120px] pointer-events-none"></div>
          <div class="fixed bottom-0 right-[20%] w-[40%] h-[30%] bg-rose-200/5 rounded-[100%] blur-[100px] pointer-events-none"></div>

          <main class="flex flex-grow">
            <section class="mx-auto w-full">
              <Suspense
                fallback={
                  <div class="flex justify-center items-center h-screen">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 shadow-lg shadow-pink-500/20"></div>
                  </div>
                }
              >
                {props.children}
              </Suspense>
            </section>
          </main>
          <Footer />
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
