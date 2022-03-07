import React from "react";

function Footer() {
  return (
    <div>
      <footer class="p-4 bg-[#2B2D42] shadow flex items-center justify-center md:p-6 dark:bg-gray-800">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          {/* <a href="" class="hover:underline">
            Walace™
          </a> */}
          . Todos os direitos reservados.
        </span>
      </footer>
    </div>
  );
}

export default Footer;
