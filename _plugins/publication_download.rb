require 'fileutils'
Jekyll::Hooks.register :site, :post_write do |site|
  source = File.join(site.source, '_bibliography', 'papers.bib')
  destination = File.join(site.dest, 'assets', 'papers.bib')
  FileUtils.mkdir_p(File.dirname(destination))
  FileUtils.cp(source, destination)
end
