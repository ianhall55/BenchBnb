
# json.array!(@benches) do |bench|
#   json.description bench.description
#   json.lat bench.lat
#   json.lng bench.lng
# end

#
# @benches.each do |bench|
#   json.extract! bench, :description, :lat, :lng
# end


@benches.each do |bench|
  json.set! bench.id do
    json.partial! 'bench', bench: bench
  end
end
